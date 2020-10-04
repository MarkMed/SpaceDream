const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "superJWTSecret";
const CONNECTION_STRING = process.env.CONNECTION_STRING || `mongodb+srv://dbAdmin:dbAdmin123@cluster0.zstyd.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model("User", {
    fullname: String,
    email: String,
    password: String
});

const Food = mongoose.model("Food", {
    eventId: String,
    userId: String,
    name: String,
    proteins: Number,
    fats: Number,
    carbohydrates: Number
});

const Event = mongoose.model("Event", {
    type: String,
    userId: String,
    startDate: String,
    endDate: String,
    allDay: Boolean,
    text: String
});

const EventType = mongoose.model("EventType", {
    name : String
});

const resolvers = {
    Query: {
        user: (_, args) => {
            return User.findById(args.id);
        },
        food: (_, args) => {
            return Food.findById(args.id);
        },
        event: (_, args) => {
            return Event.findById(args.id);
        },
        eventType: (_, args) => {
            return EventType.find({ name: args.name });
        },
        users: () => User.find(),
        foods: () => Food.find(),
        eventTypes: () => EventType.find()
    },
    Mutation: {
        login: async (_, { input }) => { 
            const user = await User.findOne({
                email: input.email, 
                password: input.password
            });
            if (user === null) {
                return {
                    ok: false,
                    error: "User not found"
                };
            }
            else {
                const { _id, email, fullname } = user;
                const token = jwt.sign({ _id, email, fullname }, JWT_SECRET);
                user.token = token;
                return {
                    ok: true,
                    user,
                }
            }
        },
        register: async (_, { input }) => {
            const user = await new User(input).save();
            const { _id, email, fullname } = user;
            const token = jwt.sign({ _id, email, fullname }, JWT_SECRET);
            user.token = token;
            return user;
        },
        registerFood: (_, { input }) => {
            const food = new Food(input);
            return food.save();
        },
        registerEvent: (_, { input }) => {
            const event = new Event(input);
            return event.save();
        },
        registerEventType: (_, { input }) => {
            const eventType = new EventType(input);
            return eventType.save();
        }
    }
};

module.exports = resolvers;

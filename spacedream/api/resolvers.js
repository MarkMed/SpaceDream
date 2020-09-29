const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "superJWTSecret";
const CONNECTION_STRING = process.env.CONNECTION_STRING || `mongodb+srv://dbAdmin:dbAdmin123@cluster0.zstyd.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Astronaut = mongoose.model("Astronaut", {
    fullname: String,
    username: String
});

const Physician = mongoose.model("Physician", {
    fullname: String,
    username: String
});

const Admin = mongoose.model("Admin", {
    fullname: String,
    username: String
});

const Event = mongoose.model("Event", {
    astronautId: String,
    physicianId: String,
    adminId: String,
    description: String,
    type: String
})

const Feedback = mongoose.model("Feedback", {
    astronautId: String,
    eventId: String,
    description: String
})

const resolvers = {
    Query: {
        event: (_, args) => {
            return Event.findById(args.id);
        },
        astronaut: (_, args) => {
            return Astronaut.findById(args.id);
        },
        physician: (_, args) => {
            return Physician.findById(args.id);
        },
        admin: (_, args) => {
            return Admin.findById(args.id);
        },
        feedbacksByEvent: (_, args) => {
            return Feedback.find({ eventId: args.eventId });
        },
        feedbacksByAstronaut: (_, args, context, info) => {
            return Review.find({ userId: args.userId });
        },
        astronauts: () => Astronaut.find(),
        physicians: () => Physician.find(),
        admins: () => Admin.find()
    },
    Event: {
        feedbacks(parent) {
            return Review.find({ eventId: parent.id });
        }
    },
    Feedback: {
        user(parent) {
            return User.findById(parent.userId);
        },
        feedbackAstronaut(parent) {
            return Astronaut.findById(parent.astronautId);
        }
    },
    FeedbackAstronaut: {
        astronaut(parent) {
            return Astronaut.findById(parent.astronautId);
        }
    },
    Mutation: {
        login: async (_, { input }) => {
            const user = await Astronaut.findOne({
                username: input.username
            });
            if (user === null) {
                user = await Physician.findOne({
                    username: input.username
                });
                if (user === null) {
                    user = await Admin.findOne({
                        username: input.username
                    });
                }
            }
            if (user === null) {
                return {
                    ok: false,
                    error: "User not found"
                };
            }
            else {
                const { _id, username, fullname } = user;
                const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
                user.token = token;
                return {
                    ok: true,
                    user,
                }
            }
        },
        registerAstronaut: async (_, { input }) => {
            const astronaut = await Astronaut.findOne({ username: input.username })
            if (astronaut === null)
                astronaut = await Physician.findOne({ username: input.username })
            if (astronaut === null)
                astronaut = await Admin.findOne({ username: input.username })

            if (astronaut === null) {
                astronaut = await new Astronaut(input).save();
                const { _id, username, fullname } = astronaut;
                const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
                astronaut.token = token;
                return {
                    ok: true,
                    astronaut
                }
            }
            else {
                return {
                    ok: false,
                    error: "Astronaut already exists"
                };
            }
        },
        registerPhysician: async (_, { input }) => {
            const physician = await Astronaut.findOne({ username: input.username })
            if (physician === null)
                physician = await Physician.findOne({ username: input.username })
            if (physician === null)
                physician = await Admin.findOne({ username: input.username })

            if (physician === null) {
                physician = await new Physician(input).save();
                const { _id, username, fullname } = physician;
                const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
                physician.token = token;
                return {
                    ok: true,
                    physician
                }
            }
            else {
                return {
                    ok: false,
                    error: "Physician already exists"
                };
            }

            const physician = await new Physician(input).save();
            const { _id, username, fullname } = physician;
            const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
            physician.token = token;
            return physician;
        },
        registerAdmin: async (_, { input }) => {
            const admin = await Admin.findOne({ username: input.username })
            if (admin === null)
                admin = await Physician.findOne({ username: input.username })
            if (admin === null)
                admin = await Admin.findOne({ username: input.username })

            if (admin === null) {
                admin = await new Admin(input).save();
                const { _id, username, fullname } = admin;
                const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
                admin.token = token;
                return {
                    ok: true,
                    admin
                }
            }
            else {
                return {
                    ok: false,
                    error: "Admin already exists"
                };
            }

            const admin = await new Admin(input).save();
            const { _id, username, fullname } = admin;
            const token = jwt.sign({ _id, username, fullname }, JWT_SECRET);
            admin.token = token;
            return admin;
        },
        registerEvent: (_, { input }) => {
            const event = new Event(input);
            return event.save();
        },
        registerFeedback: (_, { input }) => {
            const feedback = new Feedback(input);
            return feedback.save();
        }
    }
};

module.exports = resolvers;

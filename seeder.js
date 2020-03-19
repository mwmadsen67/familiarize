const Node = require("./models/Node");
const Tree = require('./models/Tree');
const User = require('./models/User');

const seed = () => {

    //Admin Users
    User.collection.deleteMany({})

    const SFAdmin = new User({
        username: 'SFAdmin',
        emai: 'instructors-sf@appacademy.io',
        password: 'go_familytree_go'
    });
    SFAdmin.save();

    const NYAdmin = new User({
        username: 'NYAdmin',
        emai: 'instructors-ny@appacademy.io',
        password: 'go_familytree_go'
    })
    NYAdmin.save();


    //trees
    Tree.collection.deleteMany({})

    const SFInstructors = new Tree({
        name: "San Francisco Instructors",
        creator: SFAdmin
    })
    SFInstructors.save();

    const NYInstructors = new Tree({
        name: "New York Instructors",
        creator: NYAdmin
    })
    NYInstructors.save();

    //instructors
    Node.collection.deleteMany({})

    const elliot = new Node({
        name: "Elliot Humphrey",
        parents: [],
        tree_id: SFInstructors
    })
    elliot.save()

    const aaron = new Node({
        name: "Aaron (lastname)",
        parents: [],
        tree_id: SFInstructors
    })
    aaron.save()

    const dallas = new Node({
        name: "Dallas Hall",
        parents: [],
        tree_id: SFInstructors
    })
    dallas.save()

    const carly = new Node({
        name: "Carly (lastname)",
        parents: [],
        tree_id: SFInstructors
    })
    carly.save()
    
    const mike = new Node({
        name: "Mike Madsen",
        parents: [carly],
        tree_id: SFInstructors
    })
    mike.save()

    const hope = new Node({
        name: "Hope Wanroy",
        parents: [],
        tree_id: SFInstructors
    })
    hope.save()

    const cynthia = new Node({
        name: "Cynthia Ma",
        parents:[hope],
        tree_id: SFInstructors
    })
    cynthia.save()

    const ronil = new Node({
        name: "Ronile Bhatia",
        parents: [cynthia],
        tree_id: SFInstructors
    })
    ronil.save()

    const ryan = new Node({
        name: "Ryan Mapa",
        parents: [elliot],
        tree_id: SFInstructors
    })
    ryan.save()

    const jen = new Node({
        name: "Jen von Moltke",
        parents: [cynthia],
        tree_id: SFInstructors
    })
    jen.save()

    const carlos = new Node({
        name: "Carlos Garcia",
        parents: [elliot],
        tree_id: SFInstructors
    })
    carlos.save()

    const andy = new Node({
        name: "Andy Minucus",
        parents: [elliot],
        tree_id: SFInstructors
    })
    andy.save()

    const helen = new Node({
        name: "Helen Yu",
        parents:[elliot],
        tree_id: SFInstructors
    })
    helen.save()

    const stephen = new Node({
        name: "Stephen Pangburn",
        parents: [elliot],
        tree_id: SFInstructors
    })
    stephen.save()

    const andyW = new Node({
        name: "Andy Wyncoop",
        parents: [aaron],
        tree_id: SFInstructors
    })
    andyW.save()

    const luke = new Node({
        name: "Luke (lastname)",
        parents: [dallas],
        tree_id: SFInstructors
    })
    luke.save()

    const walker = new Node({
        name: "Sam Walker",
        parents: [mike],
        tree_id: SFInstructors
    })
    walker.save()

    const lina = new Node({
        name: "Lina Kherchi",
        parents: [ronil],
        tree_id: SFInstructors
    })
    lina.save()

    const dean = new Node({
        name: "Dean Lacap",
        parents: [cynthia],
        tree_id: SFInstructors
    })
    dean.save()

    const rose = new Node({
        name: "Rose (lastname",
        parents: [cynthia],
        tree_id: SFInstructors
    })
    rose.save()

    const michelle = new Node({
        name: "Ryan Mapa",
        parents: [ryan],
        tree_id: SFInstructors
    })
    michelle.save()

    const erik = new Node({
        name: "Erik Elliot",
        parents: [ryan],
        tree_id: SFInstructors
    })
    erik.save()

    const julia = new Node({
        name: "Julia Wang",
        parents: [ryan],
        tree_id: SFInstructors
    })
    julia.save()

    const angela = new Node({
        name: "Angela Topchev",
        parents: [jen],
        tree_id: SFInstructors
    })
    angela.save()

    const alissa = new Node({
        name: "Alissa Crane",
        parents: [jen],
        tree_id: SFInstructors
    })
    alissa.save()

    const vanessa = new Node({
        name: "Vanessa Chen",
        parents: [jen],
        tree_id: SFInstructors
    })
    vanessa.save()

    const joe = new Node({
        name: 'Joe Bumbaca',
        parents: [dean],
        tree_id: SFInstructors
    })
    joe.save()
}

module.exports = seed
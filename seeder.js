const Node = require("./models/Node")

const seed = () => {

    //instructors
    Node.collection.deleteMany({})

    const elliot = new Node({
        name: "Elliot Humphrey",
        parents: [],
    })
    elliot.save()

    const aaron = new Node({
        name: "Aaron (lastname)",
        parents: [],
    })
    aaron.save()

    const dallas = new Node({
        name: "Dallas Hall",
        parents: [],
    })
    dallas.save()

    const carly = new Node({
        name: "Carly (lastname)",
        parents: [],
    })
    carly.save()
    
    const mike = new Node({
        name: "Mike Madsen",
        parents: [carly],
    })
    mike.save()

    const hope = new Node({
        name: "Hope Wanroy",
        parents: [],
    })
    hope.save()

    const cynthia = new Node({
        name: "Cynthia Ma",
        parents:[hope]
    })
    cynthia.save()

    const ronil = new Node({
        name: "Ronile Bhatia",
        parents: [cynthia],
    })
    ronil.save()

    const ryan = new Node({
        name: "Ryan Mapa",
        parents: [elliot],
    })
    ryan.save()

    const jen = new Node({
        name: "Jen von Moltke",
        parents: [cynthia],
    })
    jen.save()

    const carlos = new Node({
        name: "Carlos Garcia",
        parents: [elliot],
    })
    carlos.save()

    const andy = new Node({
        name: "Andy Minucus",
        parents: [elliot],
    })
    andy.save()

    const helen = new Node({
        name: "Helen Yu",
        parents:[elliot]
    })
    helen.save()

    const stephen = new Node({
        name: "Stephen Pangburn",
        parents: [elliot],
    })
    stephen.save()

    const andyW = new Node({
        name: "Andy Wyncoop",
        parents: [aaron],
    })
    andyW.save()

    const luke = new Node({
        name: "Luke (lastname)",
        parents: [dallas],
    })
    luke.save()

    const walker = new Node({
        name: "Sam Walker",
        parents: [mike],
    })
    walker.save()

    const lina = new Node({
        name: "Lina Kherchi",
        parents: [ronil],
    })
    lina.save()

    const dean = new Node({
        name: "Dean Lacap",
        parents: [cynthia],
    })
    dean.save()

    const rose = new Node({
        name: "Rose (lastname",
        parents: [cynthia],
    })
    rose.save()

    const michelle = new Node({
        name: "Ryan Mapa",
        parents: [ryan],
    })
    michelle.save()

    const erik = new Node({
        name: "Erik Elliot",
        parents: [ryan],
    })
    erik.save()

    const julia = new Node({
        name: "Julia Wang",
        parents: ryan,
    })
    julia.save()

    const angela = new Node({
        name: "Angela Topchev",
        parents: [jen],
    })
    angela.save()

    const alissa = new Node({
        name: "Alissa Crane",
        parents: [jen],
    })
    alissa.save()

    const vanessa = new Node({
        name: "Vanessa Chen",
        parents: [jen],
    })
    vanessa.save()
}

module.exports = seed
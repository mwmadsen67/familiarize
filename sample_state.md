```javascript
{
    entitites:{
        users:{
            4:{
                id:4,
                username:carlosaicrag
            }
        },
        children:{
            1:{
                id: 1,
                name: "carlos",
                parent_id: null,
                tree_id: 1
            },
            2:{
                id: 2,
                name: "carlitos",
                parent_id: 1,
                tree_id: 1
            },
            3:{
                id: 3,
                name: "robert",
                parent_id: 1,
                tree_id: 1
            },
            4:{
                id: 4,
                name: "sandra",
                parent_id: 2,
                tree_id: 1
            }
        },
        
        trees:{
            1:{
                id:1,
                name: "Garcia Family Tree"
            },
            2:{
                id:2,
                name:"App Academy Family tree"
            }
        }
    },

    session:{
        current_user:{id:1,email:carlos@garcia.com}
    },
}
```
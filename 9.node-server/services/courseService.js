module.exports = function(router) {
    let courses = [
        {
            id: 1,
            title: 'Curso 1',
            price: 500.00
        },
        {
            id: 2,
            title: 'Curso 2',
            price: 500.00
        },{
            id: 3,
            title: 'Curso 3',
            price: 250.00
        }
    ]

    router.get('/courses', (req, res) => {
        res.send(courses)
    })

    router.get('/courses/id/:id', (req, res) => {
        let currentCourse = courses.filter(c=>c.id == req.params.id)
        res.send(currentCourse)
    })

    router.post('/courses/insert', (req, res) =>{

        let newCourse = {
            id: courses.length + 1,
            title: req.body.title,
            price: req.body.price
        }

        courses.push(req.body)
        
        res.send(req.body)
    })
}
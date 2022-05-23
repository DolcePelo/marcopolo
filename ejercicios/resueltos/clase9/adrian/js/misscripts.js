function ejemploGet1() {
    fetch('datos.json')
        .then(z => z.json())
        .then(z => {
            z.menu.items.forEach(element => {
                if(element){console.log(element)}
            })
            let xdatos = {menu:z.menu.items.filter(element => {return element !== null})}
            let tmpl = document.getElementById('tmplTabla').innerHTML
            document.getElementById('miDisplay').innerHTML = Mustache.render(tmpl, xdatos)
            let tmplul = document.getElementById('tmplUlLi').innerHTML
            document.getElementById('miDisplayUl').innerHTML = Mustache.render(tmplul, xdatos)
        })
}
ejemploGet1()

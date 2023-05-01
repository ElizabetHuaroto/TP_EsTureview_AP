module.exports = function () {
  var data = {
    users: [
      {
        id:1,
        nameUser: "Luis Pérez Reyes",
        typeUser: "padre de familia",
        emailUser:"lperez@gmail.com",
        passwordUser: "123%&",
        districUser:"San Juan de Lurigancho",
        ageUser: 27,
        photo: "https://aufloria.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-18-at-14.18.38-8.jpeg"
      },

      
      {
        id:2,
        nameUser: "Camilo andrade Guerra",
        typeUser: "colegial",
        emailUser:"Camilo@gmail.com",
        passwordUser: "123%&",
        districUser:"Los Olivos",
        ageUser: 17,
        photo: "https://i.pinimg.com/236x/e6/d7/d2/e6d7d2c2c09bfc5b1aadbedbfdfbe435.jpg"
      },
      {
        id:3,
        nameUser: "Rosa del Campo Reyes",
        typeUser: "padre de familia",
        emailUser:"Rosa@gmail.com",
        passwordUser: "123%&",
        districUser:"San Isidro",
        ageUser: 27,
        photo: "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg"
      },
      {
        id:4,
        nameUser: "Karina Cano Cardenas",
        typeUser: "colegial",
        emailUser:"karina@gmail.com",
        passwordUser: "123%&",
        districUser:"San Miguel",
        ageUser: 14,
        photo: "https://i.pinimg.com/236x/31/b7/73/31b773178e85fe16a30955b8c9d50463.jpg"
      },
      {
        id:5,
        nameUser: "Luis Pérez Reyes",
        typeUser: "Padre de Familia",
        emailUser:"lperez@gmail.com",
        passwordUser: "123%&",
        districUser:"San Juan de Lurigancho",
        ageUser: 27,
        photo: "https://i.pinimg.com/736x/df/2e/28/df2e28242e54581daaf2d401842174da.jpg"
      }
    ],
    colegios:[
      {
        id: 1,
        name: "Pitágoras",
	      district: "Los olivos",
        pension:144,
        photo: "https://www.pitagorasjauja.com/upldba/archvs/1/fot_509.jpeg"
      },
      {
        id: 2,
        name: "Innova School",
        district: "San Miguel",
        pension: 177,
        photo: "https://www.innovaschools.edu.pe/wp-content/uploads/2017/05/foto-fondo-sede-1920x1080.jpg"
      },
      {
        id: 3,
        name: "Pamer",
	      district: "Chorrillos",
        pension:243,
        photo: "https://pamer.edu.pe/colegios/wp-content/uploads/sites/2/2023/01/pamer-chorrillos-2.jpg"
      }
    ],
    teachers: [
      {
        id: 1,
        name: "Javier Ulisis",
        course: "Calculo I",
        pension: 90,
        photo: "https://www.aprendemas.com/co/blog/images/2021/10/profesor_mal_tips.jpg"
      },
      {
        id: 2,
        name: "Jose Mascaro",
        course: "Programación II",
        pension: 90,
        photo: "https://buscatuprofesor.es/data/uploads/SEO%20photo/10.jpg"
      },
      {
        id: 3,
        name: "Susano Baca",
        course: "Ética",
        pension: 80,
        photo: "https://www.unav.edu/documents/10174/0/noticia_Rhonheimer/fd945a65-e502-0fe4-c44f-ff9e7f5578ce"
      }
    ]
  }
  return data
}

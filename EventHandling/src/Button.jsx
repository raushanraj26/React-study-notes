import React from 'react'

function printhello(event){
    console.log("Hello");
    console.log(event);
}
function printbye(){
    console.log("Bye");
}

function HandleDblClick(){
    console.log("You dbl clicked");
}

export default function Button() {

  return (
    <div>
        <button onClick={printhello}>Click ME!!</button>

        {/* onMouse Event */}
        <p onMouseOver={printbye}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit architecto soluta, tempora eaque reprehenderit optio odit ducimus corrupti exercitationem? Quos voluptatum labore officiis debitis eligendi, distinctio qui velit vero!
            Nesciunt impedit non eos odit maiores placeat debitis labore rerum quidem voluptate perferendis nisi cumque quaerat temporibus reiciendis facere, molestias blanditiis optio ipsa atque tempora amet! Commodi dicta natus in.
            Sunt, consequatur aliquam cupiditate exercitationem saepe officia repellat, id atque, accusamus eius velit. Voluptatum corrupti, sunt reprehenderit porro animi esse? Atque ea delectus consequuntur tempore temporibus, cum autem facilis architecto.
            Hic delectus praesentium pariatur esse quo quod, tempore qui tempora eos, ipsum reiciendis neque! Inventore, beatae? Incidunt, magnam obcaecati! Optio reiciendis sapiente ex saepe? Nobis rerum cupiditate mollitia enim sit!
            Inventore laudantium tenetur eaque dolore, perferendis hic? Dolorem expedita voluptate temporibus perferendis? Ut, explicabo sed. Facilis accusantium sunt fuga commodi, neque aperiam veniam veritatis ad voluptas adipisci maiores illum similique.
        </p>

        <button onDoubleClick={HandleDblClick}>Double Click Me</button>
    </div>
  )
}

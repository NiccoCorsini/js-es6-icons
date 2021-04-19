/*
Milestone 1
Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
Ricordate di dare priorità al JavaScript, gli stili CSS di dettaglio puntuali potete farli una volta completata la logica.
*/
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// REFS
const injector = document.querySelector(".icons");

const colors = ["dodgerblue", "green", "#7389AE"];

const colorizedIcons = colorize(icons, colors);

const selection = document.getElementById("select");

const btn = document.querySelector(".btn");

const value = document.querySelector(".value");


// SEARCH BY ENTER KEY
value.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13){
        searchText(colorizedIcons);
    }
});

// SEARCH BY BTN CLICK
btn.addEventListener("click", function(){
    searchText(colorizedIcons);
});


//DOM ASSEMBLY
select(selection);

iconInjector(colorizedIcons, injector);

//SELECT TYPE
selection.addEventListener("change", () =>{
    let choose = selection.value;

    let newArray = colorizedIcons.filter(event => choose === event.type);

    if (choose == "all"){
        newArray = colorizedIcons;
    }

    iconInjector(newArray, injector);
});

/*****************************************
 *************** FUNCTIONS ***************
 *****************************************/

//SELECT OPTION DOM INJECTOR
function select(select){
    const types = type(icons);

    let inner = '';

    types.forEach(element =>{
        inner += `<option value="${element}">${element}</option>`
    });

    return select.innerHTML += inner;
};

//ICONS DOM INJECTOR
function iconInjector(icons, iconInjector) {

    let inner = '';

    icons.forEach(element => {

        const {name, prefix, family, color} = element;

        inner += `<div class="icon">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name}</div>
        </div>`

    });

   return iconInjector.innerHTML = inner;
};

//ICONS TYPE
function type(icons){

    const type = [];
     icons.forEach(element=>{
         if (!type.includes(element.type)){
             type.push(element.type);
         }
     });

    return type;
};

//ICONS COLORIZE
function colorize(icons, colors){
    const types = type(icons);

    const colorized = icons.map(element =>{
        let indexColor = types.indexOf(element.type);

        return {
            ...element,
            color: colors[indexColor]
        }
    });

    return colorized;
};

//SEARCH ICONS FROM USER TEXT
function searchText(fonte){
    let choose = value.value;

    let newArray = fonte.filter(event => choose === event.name);

    const arrayNomi = [];

    fonte.forEach(element =>{
        arrayNomi.push(element.name);
    });
 
    if (!arrayNomi.includes(choose)){
        return injector.innerHTML = `<h3>La tua ricerca non ha prodotto risultati</h3>`;
    }
        
    document.querySelector(".value").value = "";
        
    iconInjector(newArray, injector);
}
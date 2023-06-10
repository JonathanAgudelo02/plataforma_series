"use strict";
class Serie {
    constructor() {
        this.imagen = "";
        this.nombre = "";
        this.categorias = [];
        this.directores = [];
        this.actores = [];
        this.episodios = [];
    }
    getNombre() {
        return this.nombre;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setCategorias(categorias) {
        this.categorias = categorias;
    }
    setDirectores(directores) {
        this.directores = directores;
    }
    setActores(actores) {
        this.actores = actores;
    }
    setEpisodios(episodios) {
        this.episodios = episodios;
    }
    mostrarDetalleSerie() {
        // Implementación de mostrarDetalleSerie
        console.log("Detalle de la serie: " + this.nombre);
        console.log("Imagen: " + this.imagen);
        console.log("Categorías: " + [...this.categorias]);
        console.log("Directores:");
        this.directores.forEach((director) => {
            console.log("- " + director.getNombre());
        });
        console.log("Actores:");
        this.actores.forEach((actor) => {
            console.log("- " + actor.getNombre());
        });
        console.log("Episodios:");
        this.episodios.forEach((episodio) => {
            console.log("- " + episodio.getNombre());
        });
    }
    mostrarDirectoresActores() {
        // Implementación de mostrarDirectoresActores
        console.log("Directores de la serie: " + this.nombre);
        this.directores.forEach((director) => {
            director.mostrarDetalleDirector();
        });
        console.log("Actores de la serie: " + this.nombre);
        this.actores.forEach((actor) => {
            actor.mostrarDetalleActor();
        });
    }
    crearActor(nombre, fotografia, descripcion) {
        // Implementación de crearActor
        const actor = new Actor(nombre, fotografia, descripcion);
        this.actores.push(actor);
        console.log("Actor creado: " + actor.getNombre());
    }
    crearDirector(nombre, fotografia, descripcion) {
        // Implementación de crearDirector
        const director = new Director(nombre, fotografia, descripcion);
        this.directores.push(director);
        console.log("Director creado: " + director.getNombre());
    }
    crearEpisodio(nombre, resumen, duracion) {
        // Implementación de crearEpisodio
        const episodio = new Episodio(nombre, resumen, duracion);
        this.episodios.push(episodio);
        console.log("Episodio creado: " + episodio.getNombre());
    }
}
class Director {
    constructor(nombre, fotografia, descripcion) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
    getNombre() {
        return this.nombre;
    }
    mostrarDetalleDirector() {
        // Implementación de mostrarDetalleDirector
        console.log("Detalle del director: " + this.nombre);
        console.log("Fotografía: " + this.fotografia);
        console.log("Descripción: " + this.descripcion);
    }
}
class Actor {
    constructor(nombre, fotografia, descripcion) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
    getNombre() {
        return this.nombre;
    }
    mostrarDetalleActor() {
        // Implementación de mostrarDetalleActor
        console.log("Detalle del actor: " + this.nombre);
        console.log("Fotografía: " + this.fotografia);
        console.log("Descripción: " + this.descripcion);
    }
}
class Episodio {
    constructor(nombre, resumen, duracion) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
    }
    getNombre() {
        return this.nombre;
    }
}
class Plataforma {
    constructor() {
        this.nombre = "";
        this.sitioWeb = "";
        this.listaSeries = [];
        this.planesPrecios = [];
        this.categorias = [];
    }
    getNombre() {
        return this.nombre;
    }
    getListaSeries() {
        return this.listaSeries;
    }
    setSitioWeb(sitioWeb) {
        this.sitioWeb = sitioWeb;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    mostrarListadoCategorias() {
        // Implementación de mostrarListadoCategorias
        console.log("Listado de categorías:");
        this.categorias.forEach((categoria) => {
            console.log("- " + categoria.getTipo());
        });
    }
    mostrarListadoSeries() {
        // Implementación de mostrarListadoSeries
        console.log("Listado de series en la plataforma " + this.nombre);
        this.listaSeries.forEach((serie) => {
            console.log("- " + serie.getNombre());
        });
    }
    mostrarDetallePlataforma() {
        // Implementación de mostrarDetallePlataforma
        console.log("Detalle de la plataforma: " + this.nombre);
        console.log("Sitio web: " + this.sitioWeb);
        console.log("Categorías disponibles: " + this.categorias.length);
        console.log("Series disponibles: " + this.listaSeries.length);
        console.log("Planes de precios:");
        this.planesPrecios.forEach((plan) => {
            console.log("- " + plan.getNombre() + " ($" + plan.getPrecio() + ")");
        });
    }
    crearSerie(nombre, imagen, categorias, directores, actores, episodios) {
        // Implementación de crearSerie
        const serie = new Serie();
        serie.setNombre(nombre);
        serie.setImagen(imagen);
        serie.setCategorias(categorias);
        serie.setDirectores(directores);
        serie.setActores(actores);
        serie.setEpisodios(episodios);
        this.listaSeries.push(serie);
        console.log("Serie creada: " + serie.getNombre());
    }
    crearCategoria(tipo) {
        // Implementación de crearCategoria
        const categoria = new Categoria(tipo);
        this.categorias.push(categoria);
        console.log("Categoría creada: " + categoria.getTipo());
    }
    crearPlan(nombre, precio) {
        // Implementación de crearPlan
        const plan = new PlanPrecio(nombre, precio);
        this.planesPrecios.push(plan);
        console.log("Plan de precio creado: " + plan.getNombre());
    }
}
class PlanPrecio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
}
class Gestor {
    constructor() {
        this.plataformas = [];
    }
    mostrarListadoPlataformas() {
        // Implementación de mostrarListadoPlataformas
        console.log("Listado de plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log("- " + plataforma.getNombre());
        });
    }
    crearPlataforma(nombre, sitioWeb) {
        // Implementación de crearPlataforma
        const plataforma = new Plataforma();
        plataforma.setNombre(nombre);
        plataforma.setSitioWeb(sitioWeb);
        this.plataformas.push(plataforma);
        console.log("Plataforma creada: " + plataforma.getNombre());
    }
}
class Categoria {
    constructor(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
}
// Ejemplo de uso
const gestor = new Gestor();
const plataforma = new Plataforma();
const nom = "Netflix";
const sit = "www.netflix.com";
gestor.crearPlataforma(nom, sit);
const categoriaDrama = new Categoria("Drama");
const categoriaComedia = new Categoria("Comedia");
plataforma.crearCategoria(categoriaDrama.getTipo());
plataforma.crearCategoria(categoriaComedia.getTipo());
const director = new Director("John Doe", "john.jpg", "Director de cine");
const actor = new Actor("Jane Smith", "jane.jpg", "Actriz talentosa");
plataforma.crearSerie("Serie 1", "serie1.jpg", [categoriaDrama], [director], [actor], []);
plataforma.mostrarDetallePlataforma();
plataforma.mostrarListadoSeries();
const serie1 = plataforma.getListaSeries()[0];
serie1.mostrarDetalleSerie();
serie1.mostrarDirectoresActores();
serie1.crearEpisodio("Episodio 1", "Resumen del episodio 1", 45);

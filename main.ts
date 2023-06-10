class Serie {
    private imagen: string;
    private nombre: string;
    private categorias: Array<Categoria>;
    private directores: Array<Director>;
    private actores: Array<Actor>;
    private episodios: Array<Episodio>;

    constructor(){
        this.imagen = ""
        this.nombre = ""
        this.categorias = []
        this.directores = []
        this.actores = []
        this.episodios = []
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setCategorias(categorias: Array<Categoria>): void {
        this.categorias = categorias;
    }

    public setDirectores(directores: Array<Director>): void {
        this.directores = directores;
    }
    public setActores(actores: Array<Actor>): void {
        this.actores = actores;
    }
    public setEpisodios(episodios: Array<Episodio>): void {
        this.episodios = episodios;
    }

    public mostrarDetalleSerie(): void {
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

    public mostrarDirectoresActores(): void {
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

    public crearActor(nombre: string, fotografia: string, descripcion: string): void {
        // Implementación de crearActor
        const actor = new Actor(nombre, fotografia, descripcion);
        this.actores.push(actor);
        console.log("Actor creado: " + actor.getNombre());
    }

    public crearDirector(nombre: string, fotografia: string, descripcion: string): void {
        // Implementación de crearDirector
        const director = new Director(nombre, fotografia, descripcion);
        this.directores.push(director);
        console.log("Director creado: " + director.getNombre());
    }

    public crearEpisodio(nombre: string, resumen: string, duracion: number): void {
        // Implementación de crearEpisodio
        const episodio = new Episodio(nombre, resumen, duracion);
        this.episodios.push(episodio);
        console.log("Episodio creado: " + episodio.getNombre());
    }
}

class Director {
    private nombre: string;
    private fotografia: string;
    private descripcion: string;

    constructor(nombre: string, fotografia: string, descripcion: string) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public mostrarDetalleDirector(): void {
        // Implementación de mostrarDetalleDirector
        console.log("Detalle del director: " + this.nombre);
        console.log("Fotografía: " + this.fotografia);
        console.log("Descripción: " + this.descripcion);
    }
}

class Actor {
    private nombre: string;
    private fotografia: string;
    private descripcion: string;

    constructor(nombre: string, fotografia: string, descripcion: string) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public mostrarDetalleActor(): void {
        // Implementación de mostrarDetalleActor
        console.log("Detalle del actor: " + this.nombre);
        console.log("Fotografía: " + this.fotografia);
        console.log("Descripción: " + this.descripcion);
    }
}

class Episodio {
    private nombre: string;
    private resumen: string;
    private duracion: number;

    constructor(nombre: string, resumen: string, duracion: number) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
    }

    public getNombre(): string {
        return this.nombre;
    }
}

class Plataforma {
    private nombre: string;
    private sitioWeb: string;
    private listaSeries: Array<Serie>;
    private planesPrecios: Array<PlanPrecio>;
    private categorias: Array<Categoria>;


    constructor(){
        this.nombre = "";
        this.sitioWeb = "";
        this.listaSeries = [];
        this.planesPrecios = [];
        this.categorias = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getListaSeries():  Array<Serie> {
        return this.listaSeries;
    }

    public setSitioWeb(sitioWeb: string): void {
        this.sitioWeb = sitioWeb;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public mostrarListadoCategorias(): void {
        // Implementación de mostrarListadoCategorias
        console.log("Listado de categorías:");
        this.categorias.forEach((categoria) => {
            console.log("- " + categoria.getTipo());
        });
    }

    public mostrarListadoSeries(): void {
        // Implementación de mostrarListadoSeries
        console.log("Listado de series en la plataforma " + this.nombre);
        this.listaSeries.forEach((serie) => {
            console.log("- " + serie.getNombre());
        });
    }

    public mostrarDetallePlataforma(): void {
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

    public crearSerie(
        nombre: string,
        imagen: string,
        categorias: Array<Categoria>,
        directores: Array<Director>,
        actores: Array<Actor>,
        episodios: Array<Episodio>
    ): void {
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

    public crearCategoria(tipo: string): void {
        // Implementación de crearCategoria
        const categoria = new Categoria(tipo);
        this.categorias.push(categoria);
        console.log("Categoría creada: " + categoria.getTipo());
    }

    public crearPlan(nombre: string, precio: number): void {
        // Implementación de crearPlan
        const plan = new PlanPrecio(nombre, precio);
        this.planesPrecios.push(plan);
        console.log("Plan de precio creado: " + plan.getNombre());
    }
}

class PlanPrecio {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }
}

class Gestor {
    private plataformas: Array<Plataforma>;

    constructor(){
        this.plataformas = []
    }

    public mostrarListadoPlataformas(): void {
        // Implementación de mostrarListadoPlataformas
        console.log("Listado de plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log("- " + plataforma.getNombre());
        });
    }

    public crearPlataforma(nombre: string, sitioWeb: string): void {
        // Implementación de crearPlataforma
        const plataforma = new Plataforma();
        plataforma.setNombre(nombre);
        plataforma.setSitioWeb(sitioWeb);
        this.plataformas.push(plataforma);
        console.log("Plataforma creada: " + plataforma.getNombre());
    }
}

class Categoria {
    private tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    public getTipo(): string {
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

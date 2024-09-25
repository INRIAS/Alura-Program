public class Main {
    public static void main(String[] args) {
        System.out.println("Bienvenido(a) a Screen Match");
        System.out.println("Pelicula Matrix");
        /*  String nombre = "Maria";
         int edad = 30;
         double valor = 55.9999;
         System.out.println(String.format("Mi nombre es %s, tengo %d años y hoy gasté %.2f dolares", nombre, edad, valor)); */

        int fechaDeLanzamineto = 1999;
        boolean incluidoEnElPlan = true;
        double notaDeLaPelicula = 8.2;

        double media = (8.2 + 6.0 + 9.0) / 3;
        System.out.println(media);

        String sinopsis = """
                Matriz es una paradoja
                La mejor pelicula del fin del milenio
                Fué lanzada en: """ + " " + fechaDeLanzamineto;

        System.out.println(sinopsis);

        int clasificacion= (int) (media/2);
        System.out.println(clasificacion);
    }
}

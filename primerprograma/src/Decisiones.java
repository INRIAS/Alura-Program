public class Decisiones {

    public static void main(String[] args) {
        int fechaDeLanzamineto = 1999;
        boolean incluidoEnElPlan = true;
        double notaDeLaPelicula = 8.2;
        String plan = "Plus";

        if (fechaDeLanzamineto >= 2022) {
            System.out.println("Peliculas más Populares");
        } else {
            System.out.println("Peliculas Retro que aun vale la pena ver");
        }

        if (incluidoEnElPlan || plan == "Plus") {
            System.out.println("Disfrute de su pelicula");
        } else {
            System.out.println("Pelicula no dispoonible para su plan actual");
        }
    }
}

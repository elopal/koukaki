<?php

get_header();
?>

<main id="primary" class="site-main">

    <section class="banner ">
        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>"
            alt="logo Fleurs d'oranger & chats errants" class="floating-title">
    </section>

    <section id="story" class="story section-animation1">
        
        <h2 class=" title title-text">L'histoire</h2>
      

        <article id="" class="story__article ">
            <p>
                <?php echo get_theme_mod('story'); ?>
            </p>
        </article>

    <!-- Ajout de la section Personnages -->
        <h3 class="title-p" >Les personnages</h3>
        <?php get_template_part('parts/perso'); ?>
        
        <article id="place">
            <div>
                <h3 >Le Lieu</h3>
                <p>
                    <?php echo get_theme_mod('place'); ?>
                </p>
            </div>

        </article>
    </section>


    <section id="studio" class="studio section-animation2">
        
        <h2 class="title title-text">Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue
                des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections
                en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
                principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et
                commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable
                dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise
                sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
                errants”.</p>
        </div>
    </section>

    <!-- Ajout de la section Oscars -->
    <?php get_template_part('parts/event'); ?>

</main><!-- #main -->

<?php
get_footer();

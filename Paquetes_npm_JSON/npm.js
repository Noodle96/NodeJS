/*
    npm
        * Es el archivo de software más grande del mundo que
        contiene paquetes que podemos instalar y usar con
        Node.js.
        * Herramienta para la linea de comandos

    Paquete
        Archivo o directorio descrito por un archivo package.json, 
        puede ser publicado en el registro de npm.

    Módulo
        Archivo o directorio que puede ser requerido por otro
        módulo. Un módulo puede ser un paquete, pero no todos los
        paquetes son módulos.

        Cualquier archivo o directorio ubicado en el directorio
        node_modules que puede ser importado con require().

    node_modules
        Carpeta donde se instalan los paquetes de npm.
        Contiene todos los módulos que se pueden requerir en
        nuestro proyecto.
    
    Solo los módulos que tienen un archivo package.json son
    paquetes.

    Dependencia
        Un paquete que es requerido por otro paquete.
        Se instalan en la carpeta node_modules.
    
           Paquete A             Paquete B
             _____                 _____
            |  A  |               |  B  |
            \_____/    ------>    \_____/
        
            Dependencia           "Depende de A"
        
        A es una dependecia de B.
        B depende de A.
    
        // Inside the package run:
            npm init
            npm init --yes (default values)
*/
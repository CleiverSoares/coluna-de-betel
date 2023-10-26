<template>
    <nav class="navbar">  
        <div class="logo-alterdata">
            <img class="img-logo-alterdata" src="../assets/img/logo-alterdata.png" alt="Foto da logo da alterdata">
        </div>
        <div class="menu">
            <router-link to="/Cadastrar" class="font-menu">Cadastrar</router-link> 
            <router-link to="/Visualizar" class="font-menu">Visualizar</router-link> 
            <router-link to="/Visualizar todos" class="font-menu">Visualizar todos</router-link> 
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style>
*{
    background-color: transparent;  
}
.navbar {
    display: flex;
    width: 100%;
    height: 70px;
    padding: 5px;
    background-color: #006D77 ;
    justify-content: space-between;
    align-items: center;

}
.img-logo-alterdata {
    width: 60px;
}
.logo-alterdata {
    width: 10%;
    height: auto;
    display: flex;
    background-color: transparent;
}
.menu {
    width: 100%;
    height: auto;
    display: flex;
}
.font-menu{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
}

</style>

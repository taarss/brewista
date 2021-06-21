<template>
    <div class="nav flex py-5 shadow-2xl">
        <div class="w-full justify-around mx-10 flex">
            <div class="side">
                <svg class="mb-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20.745" viewBox="0 0 20 20.745"><defs></defs><g transform="translate(-70 -14.255)"><g transform="translate(71 15.339)"><path class="a" d="M.327,7.361l7.8-7.1A1,1,0,0,1,9.452.241l8.2,7.12a1.01,1.01,0,0,1,.345.76v9.54a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V8.1A1,1,0,0,1,.327,7.361Z"/></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3"/></svg>
            </div>
            <div class="side">
                <svg class="mb-2" xmlns="http://www.w3.org/2000/svg" width="19.76" height="17.364" viewBox="0 0 19.76 17.364"><defs></defs><g transform="translate(1.126 1)"><path class="a" d="M3.314,5.318a4.5,4.5,0,0,1,6.363,0L11,6.636l1.319-1.317a4.5,4.5,0,0,1,6.363,0c1.757,1.757,1.224,4.673,0,6.364-4.489,6.2-6.727,7.682-7.682,7.682s-3.555-1.247-7.682-7.683c-1.271-1.982-1.757-4.606,0-6.363Z" transform="translate(-2.171 -4)"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3"/></svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .nav {
        position: fixed;
        bottom: 0;
        background-color: white;
        width: 100%;
        -webkit-box-shadow: 3px 0px 10px 5px rgba(0,0,0,0.3); 
box-shadow: 3px 0px 10px 5px rgba(0,0,0,0.3);
    }
    .side{
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
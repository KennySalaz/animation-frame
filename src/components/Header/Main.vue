<template>
    <header id="header" class="menu-container">
        <div class="logo-box">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M704 469.333333h-200.533333L640 106.666667H405.333333l-128 448h183.466667L362.666667 960z"
                        fill="#FFC107"></path>
                </g>
            </svg>
        </div>
        <nav id="nav-bar">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li>
                    <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contacto" class="nav-link">Crear Animacion</RouterLink>
                </li>
                <li>
                    <RouterLink to="/documents" class="nav-link">Editar Animacion</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

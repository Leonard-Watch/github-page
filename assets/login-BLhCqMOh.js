function s(){return`   
<div class="fondoanimado">
    
    <!-- Contenedor del formulario -->
    <div class="container vh-100 d-flex align-items-center justify-content-center">
        <div class="row justify-content-center w-100">
    
            <div class="col-md-8 col-lg-6" id="formContent">
                <div class="card login-card shadow-lg p-4" style="border-radius: 10px;">
                    <div class="text-center mb-4">
                        <h2 class="fw-bold">LOGIN</h2>
                    </div>
    
                    <form id="loginForm">
                        
                        <!-- Username -->
                        <div class="mb-4">  
                            <label class="form-label text-black fw-bold mb-2">Username</label>  
                            <input 
                                type="text" 
                                id="username" 
                                class="form-control form-control-lg fs-6 py-2"  
                                placeholder="Ingresa tu usuario" 
                                required
                            >
                            <div id="usernameError" class="text-danger error-message mt-2" style="display: none;">  
                                <i class="bi bi-exclamation-circle-fill me-2"></i>Usuario requerido  
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="mb-4"> 
                            <label class="form-label text-black fw-bold mb-2">Password</label>  
                            <input 
                                type="password" 
                                id="password" 
                                class="form-control form-control-lg fs-6 py-2"  
                                placeholder="Ingresa tu contraseña" 
                                required
                            >
                            <div id="passwordError" class="text-danger error-message mt-2" style="display: none;">  
                                <i class="bi bi-exclamation-circle-fill me-2"></i>Contraseña requerida  
                            </div>
                        </div>

                        <div class="d-flex justify-content-between mb-4">
                            <div class="form-check">
                                
                            </div>
                        </div>

                        <div id="generalError" class="alert alert-danger py-2 mb-4" style="display: none;"></div>  

                        <button 
                            type="submit" 
                            class="btn btn-primary btn-lg w-100 btn-login py-2 transition-all">
                            <span id="loginText">INGRESAR</span>
                            <span id="loginSpinner" class="spinner-border spinner-border-sm d-none ms-2"></span>  
                        </button>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>

    
    <!-- Animación de carga (oculta inicialmente) -->
    <div class="cargando">
        <div class="cargando__absolut2">
            <span class="cargando__span">A</span>
            <span class="cargando__span">N</span>
            <span class="cargando__span">I</span>
            <span class="cargando__span">M</span>
            <span class="cargando__span">A</span>
            <span class="cargando__span cargando__span--red">T</span>
            <span class="cargando__span cargando__span--red">U</span>
            <span class="cargando__span cargando__span--red">C</span>
        </div>
        
        <div class="cargando__absolute">
            <span class="cargando__span cargando__span--modificador">A</span>
            <span class="cargando__span cargando__span--modificador">N</span>
            <span class="cargando__span cargando__span--modificador">I</span>
            <span class="cargando__span cargando__span--modificador">M</span>
            <span class="cargando__span cargando__span--modificador">A</span>
            <span class="cargando__span cargando__span--modificador">T</span>
            <span class="cargando__span cargando__span--modificador">U</span>
            <span class="cargando__span cargando__span--modificador">C</span>
        </div>

        <div class="loading">
            <span class="loading__span">C</span>
            <span class="loading__span">a</span>
            <span class="loading__span">r</span>
            <span class="loading__span">g</span>
            <span class="loading__span">a</span>
            <span class="loading__span">n</span>
            <span class="loading__span">d</span>
            <span class="loading__span">o</span>
            <span class="loading__span">.</span>
            <span class="loading__span">.</span>
            <span class="loading__span">.</span>
        </div>
    </div>
</div>
  `}function n(){a()}async function a(){console.log("Obteniendo datos del servidor...")}export{n as init,s as render};

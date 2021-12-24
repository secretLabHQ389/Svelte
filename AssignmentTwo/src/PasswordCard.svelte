<script>
    export let removePasswordHandler, password
  </script>
    
  <div class="password-card">
    <header>
      <div class="grid-container">
        <div class="height100p marginpoint5rem">
          <h1>password: {password}</h1>
        </div>
      </div>
    </header>
    <div class="removal" on:click={removePasswordHandler}>
      <p>Click to Remove</p>
    </div>
  </div>
    
  <style>
    .removal {
      border-radius: 5px;
      background-color: red;
      color: white;
    }

    .password-card {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      max-width: 30rem;
      border-radius: 5px;
      margin: 1rem 0;
    }
  
    .height100p {
        height: 100%;
    }
  
    .marginpoint5rem {
        margin: .5rem;
    }
  
    header {
      height: 7rem;
      padding: .5rem;
    }
  
    .grid-container {
      display: grid;
      grid-template-columns: 33% 67%;
      justify-content: space-between;
    }
  
    h1 {
      font-size: 1.25rem;
      font-family: "Roboto Slab", sans-serif;
      margin: 0.5rem 0;
    }
  </style>
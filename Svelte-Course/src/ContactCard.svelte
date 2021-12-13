<script>
  export let userName, jobTitle, description, imageProp
</script>
  
<div class="contact-card">
  <header>
    <div class="grid-container">
      <div class="thumb height100p marginpoint5rem">
        <img class="height100p" src={imageProp} alt="Attempt at prop, three happy bears walking near brook." />
      </div>
      <div class="user-data marginpoint5rem">
        <h1>{userName}</h1>
        <!-- override text escaping: -->
        <h2>Job: {@html jobTitle}</h2>
      </div>
    </div>
  </header>
  <!-- <div class={description ? "description" : "description no-desc"}> -->
  <div class="description" class:no-desc="{!description}">
    <p>{description ? description : 'A short description'}</p>
  </div>
</div>
  
<style>
  .contact-card {
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

  .thumb {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .user-data {
    grid-column-start: 2;
    grid-column-end: 2;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }

  .no-desc {
    background-color: lightblue;
  }
</style>
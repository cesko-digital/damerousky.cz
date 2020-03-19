<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">DámeRoušky.cz</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/page/pro-seniory">Informace pro seniory</g-link>
        <g-link class="nav__link" to="/page/vytvorit-misto">Jak vytvořit nové místo</g-link>
        <g-link class="nav__link" to="/page/faq">Časté dotazy (a odpovědi)</g-link>
        <g-link class="nav__link" to="/page/najit-mista">Jak najít nejbližší místa s rouškou</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

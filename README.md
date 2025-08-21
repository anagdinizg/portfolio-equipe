# Portfólio da Equipe

Este projeto é um portfólio colaborativo, onde cada pessoa da equipe possui sua própria página. Ideal para quem está começando e quer aprender sobre estrutura de projetos web.

## Estrutura do Projeto

```
index.html
package.json
scripts.js
style.css
assets/
pessoas/
  amanda/
    index.html
    script.js
    style.css
  ana/
    index.html
    script.js
    style.css
  fernanda/
    index.html
    script.js
    style.css
```

## Como usar

1. **Clone o repositório**
   ```sh
   git clone https://github.com/anagdinizg/portfolio-equipe.git
   cd portfolio-equipe
   ```

2. **Instale um servidor local para visualizar as páginas**
   - Recomendado: [serve](https://www.npmjs.com/package/serve)
   ```sh
   npm install -g serve
   ```

3. **Inicie o servidor**
   ```sh
   serve .
   ```
   - O terminal mostrará um endereço, geralmente `http://localhost:3000`.  
   - Abra esse endereço no navegador para visualizar a página principal (`index.html`).

4. **Visualize páginas individuais**
   - Para acessar a página de cada pessoa, navegue até:
     ```
     http://localhost:3000/pessoas/nome/index.html
     ```
     Exemplo:  
     ```
     http://localhost:3000/pessoas/amanda/index.html
     ```

5. **Scripts**
   - O arquivo `scripts.js` é executado junto com a página principal.
   - Cada pessoa pode adicionar funcionalidades em seu próprio `script.js`, que será carregado na respectiva página.

## Dicas

- Use HTML, CSS e JavaScript básicos para editar as páginas.
- Para dúvidas, consulte a documentação oficial:
  - [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  - [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

# Estudos em Three.Js
Este repositório foi criado com o intuito de documentar meus estudos realizados no Three.Js para o desenvolvimento do projeto "Girls Just Wanna Have Fun" da Orc'Estra Gamificação

O principal objetivo da primeira sprint é a de estudar a biblioteca Three.js, aprender a implementar modelagens 3D, bem como implementar um fundo dinâmico e animações, além de criar uma trilha de desenvolvimento do projeto para as próximas sprints.

Até dado momento, meus estudos foram direcionados a implementar a biblioteca preparando um ambiente de desenvolvimento. Tendo isso em vista, pude chegar a duas opções de ambientes para desenvolver o projeto:

## Capacitação na ferramenta
Para aprender mais sobre a biblioteca a ser usada, foram realizadas pesquisas na documentação do projeto, e em vídeo aulas para aprender assuntos específicos

Documentação oficial da biblioteca: [Three.js](https://threejs.org/)

### Vídeo aulas:
[Vídeo aula introdutória](https://www.youtube.com/watch?v=_OwJV2xL8M8&ab_channel=developedbyed) --- Essa vídeo aula apresenta o conteúdo de forma bem resumida e explicada, desde o começo do desenvolvimento de um projeto em Three.js, passando pela criação do ambiente de desenvolvimento utilizando Vite e React.js e implementação de funcionalidades básicas como a criação de uma cena e câmera.

[Implementar uma modelagem 3D externa](https://www.youtube.com/watch?v=yPA2z7fl4J8&t=1162s&ab_channel=RajatKumarGupta) --- Aqui nos é explicado e mostrado passo a passo como implementar uma modelagem 3D externa no nosso app.

[Implementação da funcionalidade "orbit"](https://www.youtube.com/watch?v=Nxd9L6X8quo&ab_channel=WaelYasmina) --- Nessa vídeo aula nos é explicado como implementar uma função que irá permitir que o usuário manipule o objeto 3D bem como quiser, dando zoom, rotacionando e mudando ele de posição na tela.

[Desenvolvendo um "mundo" 3D](https://www.youtube.com/watch?v=PPwR7h5SnOE&list=PLRL3Z3lpLmH0aqLDbfh0ZmnDkpXPDnTau&ab_channel=SimonDev) --- Essa vídeo aula mostra como criar um cenário 3D dentro do three.js, utilizando-se de skyboxes para criar um cenário mais imersivo. Vale ressaltar que esse app foi desenvolvido totalmente em html e js, sem se valer de outra biblioteca que não seja o three.js

[Adicionar animação do objeto](https://www.youtube.com/watch?v=8n_v1aJmLmc&t=79s&ab_channel=SimonDev) -- O foco dessa vídeo aula é de implementar um objeto 3D com animação. Bem como o vídeo acima, o app desse vídeo foi desenvolvido utilizando somente a bilbioteca three.js, com html e js "puros".


## Ambiente de desenvolvimento

### Ambiente no React.js
**Vantagens:** O React apresenta algumas vantagens como a facilidade da implementação da biblioteca, além de futuras bibliotecas que podemos precisar implementar no projeto

**Desvantagens:** Ainda não se sabe como foi desenvolvido o site no qual vamos implementar nosso projeto, tendo isso em vista, usar o React.js pode ocasionar em problemas de compatibilidade com o site em que nosso projeto será alocado.

Porém, isso é apenas uma especulação, ainda precisamos de uma confirmação do provedor do site para saber como será feita essa integração.

### Ambiente em html e js
**Vantagens:** O projeto consequentemente fica mais leve e com menos linhas de código, além de ser mais simples de aloca-lo eventualmente em outros sites

**Desvantagem:** Para se utilizar desse ambiente, temos que pegar os arquivos do three.js de um arquivo armazenado em um cdn, e caso eventualmente esse arquivo saia do ar, nosso projeto não irá mais funcionar.

Esse problema pode ser contornado se implementarmos esses arquivos diretamente no nosso projeto, de modo que tudo será requisitado localmente.

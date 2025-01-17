const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
let output = [];

poem.lines.map((line, i)=>{
  output.push(
    <hr key={i + '-sepratoar'}/>
  );
  output.push(
    <p key={i + '-text'}>{line}</p>
  )
});
output.shift() // remove the first hr
return(
  <article>
    {output}
  </article>
)

}

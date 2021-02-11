export default function TacoComponent(props) {
  function existsTaco(taco) {
    return taco.condiment
      ? (
        <>
          <p>
            { `${taco.base_layer.name} with
              ${taco.mixin.name}, garnished with
              ${taco.condiment.name} topped off with
              ${taco.seasoning.name} and wrapped
              in delicious ${taco.shell.name}` }
          </p>
        </>
      )
      : <span>Estamos eligiendo tu taco ideal...</span>
  }

  return (
    <>
      { existsTaco(props.taco) }
    </>
  )
}

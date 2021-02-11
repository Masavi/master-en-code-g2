export default function TacoComponent({ taco }) {
  return (
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
}

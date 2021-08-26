export type CardFileExportType = {
  Abilities: AbilityCardType[]
}

export type AbilityCardType = {
  name: string | React.ReactNode | JSX.Element
  description: string | React.ReactNode | JSX.Element
  cost: number
  produce: number
}

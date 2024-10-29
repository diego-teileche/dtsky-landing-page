import {
  DTAlien,
  DTCircleShiftLoader,
  DTCirclesLoader,
  DTClimbCube,
  DTColliderLoader,
  DTFlashEdgeCard,
  DTFlashslideButton,
  DTFlipFluxCard,
  DTFlipFrameCard,
  DTFocusText,
  DTGhostCubes,
  DTGhostText,
  DTGlassCard,
  DTGlitchText,
  DTHookedCircles,
  DTHoverhueButton,
  DTHoverHustleCards,
  DTIlluminationText,
  DTInfernoRing,
  DTInvertedBorderCard,
  DTLightningButton,
  DTLikeButton,
  DTMagicText,
  DTModernButton,
  DTModernSwitch,
  DTNeonText,
  DTNeumorphismButton,
  DTRevealGlassCard,
  DTRowButton,
  DTSpectrumLoader,
  DTSquaresButton,
  DTSquaresLoader,
  DTStackedSpectra,
  DTSyncHavoc,
  DTTextCube3d,
  DTTypingLoader,
} from "dtsky"

const components: any = {
  DTFlashslideButton,
  DTHoverhueButton,
  DTLightningButton,
  DTLikeButton,
  DTModernButton,
  DTNeumorphismButton,
  DTRowButton,
  DTSquaresButton,
  DTFlashEdgeCard,
  DTFlipFluxCard,
  DTFlipFrameCard,
  DTGlassCard,
  DTHoverHustleCards,
  DTInvertedBorderCard,
  DTRevealGlassCard,
  DTCirclesLoader,
  DTCircleShiftLoader,
  DTColliderLoader,
  DTSpectrumLoader,
  DTSquaresLoader,
  DTTypingLoader,
  DTAlien,
  DTClimbCube,
  DTFocusText,
  DTGhostCubes,
  DTHookedCircles,
  DTInfernoRing,
  DTStackedSpectra,
  DTSyncHavoc,
  DTTextCube3d,
  DTModernSwitch,
  DTGhostText,
  DTGlitchText,
  DTIlluminationText,
  DTMagicText,
  DTNeonText,
}

const ComponentWrapper = ({ componentName, ...props }: any) => {
  const ComponentToRender = components[componentName]

  if (!ComponentToRender) {
    return <p>Component not found</p>
  }

  return <ComponentToRender {...props} />
}

export default ComponentWrapper

function useCardTilt() {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`);
    card.style.setProperty('--glow-x', `${((x + 1) / 2) * 100}%`);
    card.style.setProperty('--glow-y', `${((y + 1) / 2) * 100}%`);
  };

  const handlePointerLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--glow-x', '50%');
    card.style.setProperty('--glow-y', '50%');
  };

  return {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  };
}

export default useCardTilt;

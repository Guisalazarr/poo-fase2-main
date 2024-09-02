// função para calcular o slot de horários
export function calculeSlotTime(size, speed, time) {
    const travelTime = (size / speed)
    const result = Math.ceil(travelTime) - 1

    const slot = [time, time + result]
    return slot
}
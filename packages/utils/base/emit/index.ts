export const baseEmits = ['click','onClick']


export function emitClick(
  emit: (event: string, ...args: any[]) => void,
  ...args: any[]
) {
  emit("onClick",...args);
  emit("click",...args);
}
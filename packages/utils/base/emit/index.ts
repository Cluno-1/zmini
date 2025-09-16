export const baseEmits = ['click','onClick','change','onChange','onBlur','blur','update:modelValue']


export function emitClick(
  emit: (event: string, ...args: any[]) => void,
  ...args: any[]
) {
  emit("onClick",...args);
  emit("click",...args);
}

export function emitChange(
  emit: (event: string, ...args: any[]) => void,
  ...args: any[]
) {
  emit("onChange",...args);
  emit("change",...args);
}


export function emitBlur(
  emit: (event: string, ...args: any[]) => void,
  ...args: any[]
) {
  emit("onBlur",...args);
  emit("blur",...args);
}

export function emitVModel(
  emit: (event: string, ...args: any[]) => void,
  ...args: any[]
) {
  emit("update:modelValue",...args);
}
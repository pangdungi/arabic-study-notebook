const REGISTRY_PREFIX = 'arabic-study-notebook:v1:'

export type RegistrySnapshot = {
  version: 1
  updatedAt: string
}

function storageKey(key: string) {
  return `${REGISTRY_PREFIX}${key}`
}

export function readRegistry(): RegistrySnapshot {
  const raw = localStorage.getItem(storageKey('snapshot'))

  if (!raw) {
    return {
      version: 1,
      updatedAt: new Date().toISOString(),
    }
  }

  try {
    const parsed = JSON.parse(raw) as RegistrySnapshot
    if (parsed.version === 1) return parsed
  } catch {
    // ignore malformed data
  }

  return {
    version: 1,
    updatedAt: new Date().toISOString(),
  }
}

export function writeRegistry(snapshot: RegistrySnapshot) {
  localStorage.setItem(storageKey('snapshot'), JSON.stringify(snapshot))
}

export function touchRegistry() {
  const next: RegistrySnapshot = {
    version: 1,
    updatedAt: new Date().toISOString(),
  }
  writeRegistry(next)
  return next
}

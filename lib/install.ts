
export async function createTsConfig(): Promise<void> {
  console.log('create tsconfig.json');
}


export async function createEsLintRc(): Promise<void> {
  console.log('create .eslintrc.js');
}


export async function install(): Promise<void> {
  console.log('install');

  await createTsConfig();
  await createEsLintRc();
}

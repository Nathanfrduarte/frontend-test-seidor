/*
 * Interface com propriedades de Funcionário
 */
export default interface Employee {
    name: string
    cpf: string
    rawSalary: number
    discount: number
    dependents: number
}
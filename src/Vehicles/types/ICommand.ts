export default interface ICommand<T> {
    execute(): T
}
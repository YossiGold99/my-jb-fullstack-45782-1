export default abstract class Dispathcer {
constructor (public UserId: string, public payload:any)
abstract ShouldDispatch(); Boolean
abstract dispatch (); void
}
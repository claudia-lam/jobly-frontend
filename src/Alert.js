
/** Error alert message
 *
 * Props:
 *  -
 *
 * State:
 *  -
 *
 * [LoginForm, SignupForm, ProfileForm] --> Alert
 */
function Alert({ errors }) {
  return (
    <div className='Alert'>
      {errors.map((e, i) => <p key={i}>{e}</p>)}
    </div>
  );
}


export default Alert;
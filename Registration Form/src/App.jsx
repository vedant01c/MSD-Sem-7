import './App.css';

function App() {
  return (
    <>
      <form  method="post">
        <fieldset>
          <legend>Form</legend>

          Name:<br />
          <input type="text" autoComplete="on" required />
          <br /><br />

          Email:<br />
          <input type="email" autoComplete="on" required />
          <br /><br />

          Mobile:<br />
          <input type="tel" required />
          <br /><br />

          Birth Date:<br />
          <input type="date" />
          <br /><br />

          Gender:
          <label>
            <input type="radio" name="gender" value="female" /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="other" /> Other
          </label>
          <br /><br />

          <table>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  <textarea rows="4" cols="30"></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          College:
          <select>
            <option>Select</option>
            <option>Dr. D. Y. Patil College of Engineering, Kolhapur</option>
            <option>Kolhapur Institute of Technology, Kolhapur</option>
            <option>RIT</option>
            <option>AICTE</option>
            <option>Bharati Vidyapeeth</option>
          </select>
          <br /><br />

          Qualification:
          <select>
            <option>Select</option>
            <option>First Year</option>
            <option>Second Year</option>
            <option>Third Year</option>
            <option>B.Tech</option>
          </select>
          <br /><br />

          Department:
          <select>
            <option>Select</option>
            <option>CSE</option>
            <option>Mechanical</option>
            <option>Chemical</option>
            <option>AIML</option>
            <option>DS</option>
          </select>
          <br /><br />

          Programming Skills:<br />
          <label><input type="checkbox" /> C</label><br />
          <label><input type="checkbox" /> C++</label><br />
          <label><input type="checkbox" /> Java</label><br />
          <label><input type="checkbox" /> Python</label><br /><br />

          <input
            type="submit"
            value="Submit"
            // style={{ borderRadius: '7px', backgroundColor: '#E195AB', padding: '8px 16px' }}
          />
        </fieldset>
      </form>
    </>
  );
}

export default App;
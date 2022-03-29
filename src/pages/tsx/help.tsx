import { HelpPage } from "../styles/help.styled"
const Help: React.FC = () => {
  return (
    <HelpPage>
      <h1>Welcome to Cryptograph</h1>
      <p>This application is used to encode and decode secret messages in an array of formats such as binary or morse code. You can optionally add a custom key to encrypt the message so that only someone with the key can decipher the message.
      </p>
      <h2>How to use:</h2>
      <section>
        <h3>Encoding</h3>
        <ol>
          <li>Select encode at the top of the header.</li>
          <li>Select the encryption method from the drop down menu.</li>
          <li>Enter your secret</li>
          <li>Optionally enter a secret passphrase.</li>
          <li>Click in the encode button.</li>
          <li>Your encrypted message and optionally secret key will be displayed below with buttons to copy both.</li>
        </ol>
      </section>
      <section>
        <h3>Decoding</h3>
        <ol>
          <li>Select decode in the header.</li>
          <li>Select your encryption method.</li>
          <li>Enter the encrypted message.</li>
          <li>Optionally enter the secret key if you have one.</li>
          <li>Click on decode.</li>
          <li>Your message will be displayed below with a button to copy the message.</li>
        </ol>
      </section>
    </HelpPage>
  )
}

export default Help
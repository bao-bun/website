"use client";

export default function Home() {
  return (
    <div className="flex flex-col m-6 w-screen">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-2xl font-black">
          Terms of Service
        </h1>

        <p>Effective Date: 12.03.2025</p>
        <p>By using this bot, you agree to the following terms.</p>
      </div>

      <br/>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          1. Usage
          </h2>
        <ul>
            <li>This bot is intended for use within Discord servers (&quot;guilds&quot;) only.</li>
            <li>You must comply with Discord&apos;s Terms of Service while using this bot.</li>
        </ul>

        <h2 className="text-xl font-semibold">2. Data Storage</h2>
        <ul>
            <li>The bot only stores necessary guild configuration data to function properly. This may include settings, roles, and permissions.</li>
            <li>No personal data, message content, or user-specific information is collected or stored.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Responsibilities</h2>
        <ul>
            <li>Server administrators are responsible for the bot&apos;s usage in their guild.</li>
            <li>Misuse of the bot may result in termination of service.</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Modifications</h2>
        <p>These terms may be updated at any time. Continued use of the bot constitutes acceptance of the updated terms.</p>

        <h2 className="text-xl font-semibold">5. Contact</h2>
        <p>For questions or concerns, contact @kelvbun or @tookender.</p>
      </div>

      <div className="flex flex-col gap-2 mt-8 mb-4">
        <h1 className="text-2xl font-black">
          Privacy of Policy
        </h1>

        <p>Effective Date: 12.03.2025</p>
      </div>

      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-xl font-semibold">1. Information Collected</h2>
        <ul>
            <li>The bot collects and stores guild configuration data, such as:</li>
            <ul>
                <li>- Guild ID</li>
                <li>- Role and channel settings</li>
                <li>- Permission configurations</li>
            </ul>
        </ul>

        <h2 className="text-xl font-semibold">2. Data Sharing</h2>
        <p>No stored data is shared with third parties unless required by law.</p>

        <h2 className="text-xl font-semibold">3. Data Removal</h2>
        <p>Guild administrators can request data deletion by removing the bot from their server and contacting @kelvbun or @tookender.</p>

        <p>By using bao bun, you agree to the terms outlined above.</p>
      </div>
    </div>
  );
}

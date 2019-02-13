import React, { Component } from "react";
import ContentBlock from "../ContentBlock/ContentBlock";
import { Anchor } from "../../atoms";

// prettier-ignore
const DataProtection = () => (
    <ContentBlock id="data-protection" title="Datenschutzerklärung">
        <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
        <p>Christoph von Krüchten<br/>
            Siebachstr. 117<br/>
            50733 Köln</p>
        <p>Tel.: +49 221 355 332 337<br/>
            christoph@vonkruechten.de</p>
        <h4>Ihre Betroffenenrechte</h4>
        <p>Unter den oben angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
        <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
        <li>Berichtigung unrichtiger personenbezogener Daten,</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten,</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
        </ul>
        <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
        <p>Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden <Anchor href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener">hier</Anchor>.</p>
        <h4>Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte</h4>
        <p>Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
        <ul>
        <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
        <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</li>
        <li>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,</li>
        </ul>
        <p>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>
        <h4>Löschung bzw. Sperrung der Daten</h4>
        <p>Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
        <h4>SSL-Verschlüsselung</h4>
        <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
        <h4>Verwendung von Scriptbibliotheken (Google Webfonts)</h4>
        <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts (<Anchor href="http://www.google.com/webfonts/" target="_blank" rel="noopener">https://www.google.com/webfonts/</Anchor>). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.</p>
        <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten erheben.</p>
        <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <Anchor href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener">https://www.google.com/policies/privacy/</Anchor></p>
        <h4>Änderung unserer Datenschutzbestimmungen</h4>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        <p>Sollten Sie weitere Fragen haben, wenden Sie sich gerne an uns.</p>
    </ContentBlock>
);

export default DataProtection;

module.exports = {
  // Simple Commit-Typen mit kurzen Beschreibungen und Emojis
  types: [
    { value: 'feat', name: '✨ feat:      Neue Funktion oder Feature' },
    { value: 'fix', name: '🐛 fix:       Fehlerbehebung' },
    { value: 'docs', name: '📝 docs:      Dokumentation aktualisieren' },
    { value: 'style', name: '💄 style:     Formatierung, keine Code-Änderungen' },
    { value: 'refactor', name: '♻️  refactor: Code-Umstrukturierung ohne Bugfix oder neues Feature' },
    { value: 'test', name: '✅ test:      Tests hinzufügen oder anpassen' },
    { value: 'chore', name: '📦 chore:     Andere Änderungen, die nichts am Code ändern' }
  ],

  // Kurze und klare Nachrichten
  messages: {
    type: "Wähle den Commit-Typ:",
    subject: 'Kurze Beschreibung (max 50 Zeichen):\n',
    confirmCommit: 'Möchtest du diesen Commit erstellen?'
  },

  // Maximal 50 Zeichen für den Titel
  subjectLimit: 5000,

  // Nur die nötigsten Optionen, um es einfach zu halten
  allowCustomScopes: false,
  allowBreakingChanges: false
};
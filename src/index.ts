// Example TypeScript interface
interface Email {
  id: string;
  subject: string;
  body: string;
  from: string;
  to: string[];
  date: Date;
  isRead: boolean;
  tags?: string[];
}

// Example function using the interface
function searchEmails(query: string, emails: Email[]): Email[] {
  return emails.filter(
    email =>
      email.subject.includes(query) || email.body.includes(query) || email.from.includes(query)
  );
}

// Example usage
const exampleEmails: Email[] = [
  {
    id: '1',
    subject: 'Meeting Tomorrow',
    body: "Let's discuss the project roadmap.",
    from: 'john@example.com',
    to: ['you@example.com'],
    date: new Date('2023-12-15'),
    isRead: true,
    tags: ['work', 'important'],
  },
  {
    id: '2',
    subject: 'Weekend Plans',
    body: 'Do you want to go hiking this weekend?',
    from: 'sarah@example.com',
    to: ['you@example.com'],
    date: new Date('2023-12-16'),
    isRead: false,
  },
];

// Example search
const results = searchEmails('project', exampleEmails);
console.log('Search results:', results);

// Main function (entry point)
function main() {
  console.log('Mailyx Search - TypeScript setup complete!');
  console.log(`Found ${results.length} emails matching "project"`);
}

main();

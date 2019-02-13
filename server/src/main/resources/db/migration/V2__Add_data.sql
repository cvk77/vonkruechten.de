INSERT INTO page (id, title) VALUES ('home', 'Startseite');
INSERT INTO page (id, title) VALUES ('dataProtection', 'Datenschutz');

INSERT INTO block (id, ordering, page_id, title, content) VALUES ('home::about', 10, 'home', 'Über mich', 'Lorem ipsum dolor sit amet.');
INSERT INTO block (id, ordering, page_id, title, content) VALUES ('home::contact', 20, 'home', 'Kontakt', 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.');
INSERT INTO block (id, ordering, page_id, title, content) VALUES ('dataProtection::dataProtection', 10, 'dataProtection', 'Datenschutz', 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam.');

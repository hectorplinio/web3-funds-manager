Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Card Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders Crypto Wallet title', () => {
    cy.contains('Crypto Wallet').should('be.visible');
  });

  it('shows balance and blockchain', () => {
    cy.wait(2000);
    cy.contains('Balance:').should('be.visible');
  });

  it('handles Send and Receive button clicks', () => {
    cy.contains('Send').click();
    cy.get('input[placeholder="Amount"]').should('be.visible');

    cy.contains('Receive').click();
    cy.contains('Your public address:').should('be.visible');
  });

  it('shows the correct form when clicking buttons', () => {
    cy.contains('Send').click();
    cy.get('input[placeholder="Amount"]').should('be.visible');

    cy.contains('Receive').click();
    cy.contains('Your public address:').should('be.visible');
  });
});

describe('BlockchainSelector Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the select dropdown', () => {
    cy.wait(2000);
    cy.get('select').should('be.visible');
  });

  it('shows the correct options', () => {
    cy.get('select').children('option').should('have.length', 5);
    cy.get('select').children('option').eq(0).should('have.text', 'AVAX');
    cy.get('select').children('option').eq(1).should('have.text', 'USDC');
    cy.get('select').children('option').eq(2).should('have.text', 'WAVAX');
    cy.get('select').children('option').eq(3).should('have.text', 'WBNB');
    cy.get('select').children('option').eq(4).should('have.text', 'STG');
  });

  it('handles change correctly', () => {
    cy.get('select').select('USDC').should('have.value', 'USDC');
  });
});

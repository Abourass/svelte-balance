<script>
  import 'bulma/css/bulma.min.css'
  import Ledger from './classes/Ledger';
  import Income from './classes/Income';
  import Expense from './classes/Expense';
  import ExpenseWithSub from './classes/ExpenseWithSub';
  import Collapsible from './components/Collapsible.svelte';
  import MiniCollapsible from './components/MiniCollapsible.svelte'

  let ledger = new Ledger();
  ledger.addIncomeSource(
    new Income({name: 'paycheck', amount: 1231.46})
  ).addExpense(
    new ExpenseWithSub({name: 'Cashback + Stuff', category: 'Cashback', amount: 140.16})
    .addSource(
      new Expense({name: 'Food', category: 'Food', amount: 32.16})
    ).addSource(
      new Expense({name: 'Orthopedic Insoles', category: 'Medical', amount: 8.00})
    )
  );

  console.log(ledger);
</script>

<main>
  <Collapsible toggleID="income" toggleLabel="Your Income Source">
    {#each ledger.incomeSources as source}
      <h2 class="subtitle">+{source.amount} - {source.name}</h2>
    {/each}
  </Collapsible>
  <Collapsible toggleID="initBalance" toggleLabel="Initial Balance">
    <h2 class="subtitle">${ledger.initialBalance}</h2>
  </Collapsible>
  <Collapsible toggleID="expenses" toggleLabel="Expenses" show="true">
    {#each ledger.expenses as source, i}
      <MiniCollapsible
        toggleID="{source.category + i}"
        toggleLabel="Purchase of ${source.amount}"
        tagContent="${ledger.transactions[i].total}"
        tagType="is-success"
      >
      {#if source.subsources}
        <span>-${source.subtotal} - {source.name} </span>
        <br />
        {#each source.subsources as subsource}
          <span>-${subsource.amount} - {subsource.name}</span>
          <br />
        {/each}
      {:else}
        <h2 class="subtitle">-{source.amount} - {source.name}</h2>
      {/if}
  </MiniCollapsible>
    {/each}
  </Collapsible>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

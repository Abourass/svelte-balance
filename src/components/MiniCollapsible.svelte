<script>
  export let toggleLabel;
  export let toggleID;
  export let tagContent;
  export let tagType;
  export let show;
</script>

<div class="wrap-collapsible">
  <input id="{toggleID}" class="toggle" type="checkbox" checked={show === 'true' ? 'true' : ''}>
  <label for="{toggleID}" class="label-toggle">{toggleLabel} <span class="tag {tagType}">{tagContent}</span></label>
  <div class="collapsible-content">
    <div class="content-inner">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  input[type='checkbox']{ display: none; }
  .label-toggle{
    display: block;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.125;
    word-break: break-word;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem;
    color: #3da79a;
    background: #fdffff;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.25s ease-out;
  }
  .label-toggle:hover { color: #56eddb; }
  .label-toggle::before {
    content: ' ';
    display: inline-block;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    margin-right: .7rem;
    transform: translateY(-2px);
    transition: transform .2s ease-out;
  }
  .collapsible-content .content-inner {
    background: rgba(230, 215, 213, 0.2);
    border-bottom: 1px solid rgba(168, 184, 181, 0.15);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: .5rem 1rem;
  }
  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height .25s ease-in-out;
  }
  .toggle:checked + .label-toggle + .collapsible-content { max-height: 100vh; }
  .toggle:checked + .label-toggle::before { transform: rotate(90deg) translateX(-3px);}
  .toggle:checked + .label-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>

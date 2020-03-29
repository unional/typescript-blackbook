# Events

## Data payloads

- When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

```typescript
// bad
$(this).trigger('listingUpdated', listing.id);

...

$(this).on('listingUpdated', (e, listingId) => {
// do something with listingId
});
```

prefer:

```typescript
// good
$(this).trigger('listingUpdated', { listingId: listing.id });

...

$(this).on('listingUpdated', (e, data) => {
// do something with data.listingId
});
```

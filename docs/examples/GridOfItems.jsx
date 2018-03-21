<div>
  <Flex p={2} flexDirection="column" className='bold'>
    Grids of things
  </Flex>
  <Flex p={2} w={1}>
    <Grid gridColumns={[3,6,9]} gridGaps={[5,10,15]} w={1}>
      {
        Array.apply(null, { length: 90 }).map((e, i) => (
          <Box py={2} key={i}><Bar /></Box>
        ))
      }
    </Grid>
  </Flex>
</div>

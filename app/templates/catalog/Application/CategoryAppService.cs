using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using <%= projectName %>.Authorization;
using <%= projectName %>.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using <%= projectName %>.<%= catalogNamePluralize %>.Dto;

namespace <%= projectName %>.<%= catalogNamePluralize %>
{
    [AbpAuthorize(PermissionNames.Pages_<%= catalogNamePluralize %>)]
    public class <%= catalogName %>AppService : CrudAppService<<%= catalogName %>, <%= catalogName %>Dto, int, <%= catalogName %>InputDto, <%= catalogName %>CreateDto, <%= catalogName %>UpdateDto>, I<%= catalogName %>AppService
    {
        public <%= catalogName %>AppService(IRepository<<%= catalogName %>> repository) : base(repository)
        {
        }

        protected override IQueryable<<%= catalogName %>> ApplySorting(IQueryable<<%= catalogName %>> query, <%= catalogName %>InputDto input)
        {
            return query.OrderBy(x => x.Name);
        }

        protected override IQueryable<<%= catalogName %>> CreateFilteredQuery(<%= catalogName %>InputDto input)
        {
            var query = base.CreateFilteredQuery(input);

            if (!string.IsNullOrEmpty(input.<%= catalogName %>Name))
                query = query.Where(x => x.Name.ToLower().Contains(input.<%= catalogName %>Name.ToLower()));

            if (input.IsActive != null)
                query = query.Where(x => x.IsActive == input.IsActive);

            return query;
        }
    }
}

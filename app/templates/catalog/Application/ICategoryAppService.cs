using Abp.Application.Services;
using <%= projectName %>.<%= catalogNamePluralize %>.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.<%= catalogNamePluralize %>
{
    public interface I<%= catalogName %>AppService : ICrudAppService<<%= catalogName %>Dto, int, <%= catalogName %>InputDto, <%= catalogName %>CreateDto, <%= catalogName %>UpdateDto>, IApplicationService
    {
    }
}
